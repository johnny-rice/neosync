// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.25.0

package mysql_queries

import ()

type AdminPrivilege struct {
	PrivilegeType string
	Grantee       string
}

type DbPrivilege struct {
	TableSchema   string
	PrivilegeType string
	Grantee       string
}
