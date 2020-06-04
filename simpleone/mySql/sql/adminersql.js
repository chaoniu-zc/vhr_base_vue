const sql = {
    adminer: 
"SELECT\
    u.elemid,\
    u.elemname,\
    n.unitname\
FROM\
    base_elem e,\
    unit n,\
    USER u\
WHERE e.`elemid` = u.`elemid`\
     AND u.`unitid` = n.`unitid`"
}