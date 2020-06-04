let elembase = {
    elembaseinfo: `SELECT
    b.*,
    u.unitname,
    j.jobname
  FROM
    base_elem AS b,
    unit AS u,
    job AS j
  WHERE
    b.unitid=u.unitid AND
    b.jobid=j.jobid`
}
module.exports=elembase