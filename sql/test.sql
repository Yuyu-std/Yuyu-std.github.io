use scnu_acm_rank;

SHOW CREATE TABLE config;

CREATE TABLE config (
  `emailFrom` varchar(255) NOT NULL COMMENT "系统发送邮箱",
  `emailPassword` varchar(255) NOT NULL COMMENT "发送密钥",
  `emailHost` varchar(255) NOT NULL COMMENT "邮箱主机 (smtp.163.com)",
) COMMENT "配置表";