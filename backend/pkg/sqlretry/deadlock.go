package sqlretry

import (
	"errors"
	"strings"

	"github.com/go-sql-driver/mysql"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/lib/pq"
)

const (
	// MySQL error codes
	// 1213 - Deadlock found when trying to get lock
	mysqlDeadlock = 1213
	// 1205 - Lock wait timeout exceeded
	mysqlLockTimeout = 1205

	// PostgreSQL error codes
	pqDeadlockDetected = "40P01"
)

func isDeadlockError(err error) bool {
	if err == nil {
		return false
	}
	return isMysqlDeadlockError(err) || isPostgresDeadlock(err) || isMSSQLDeadlock(err)
}

func isMysqlDeadlockError(err error) bool {
	if err == nil {
		return false
	}
	var mysqlErr *mysql.MySQLError
	if errors.As(err, &mysqlErr) {
		return mysqlErr.Number == mysqlDeadlock || mysqlErr.Number == mysqlLockTimeout
	}
	return false
}

func isPostgresDeadlock(err error) bool {
	if err == nil {
		return false
	}

	var pgErr *pgconn.PgError
	if errors.As(err, &pgErr) {
		return pgErr.Code == pqDeadlockDetected
	}

	var pqErr *pq.Error
	if errors.As(err, &pqErr) {
		return pqErr.Code == pqDeadlockDetected
	}

	return false
}

// isMSSQLDeadlock checks specifically for SQL Server deadlock errors
func isMSSQLDeadlock(err error) bool {
	if err == nil {
		return false
	}
	// SQL Server deadlocks can be detected in two ways:
	// 1. Error number 1205
	// 2. Error message containing specific text

	// First check for specific error number in message
	if strings.Contains(err.Error(), "Error 1205") {
		return true
	}

	// Also check for common deadlock message patterns
	deadlockPatterns := []string{
		"deadlock victim",
		"Transaction (Process ID",
		"was deadlocked",
		"has been chosen as the deadlock victim",
	}

	msg := strings.ToLower(err.Error())
	for _, pattern := range deadlockPatterns {
		if strings.Contains(msg, strings.ToLower(pattern)) {
			return true
		}
	}

	return false
}
