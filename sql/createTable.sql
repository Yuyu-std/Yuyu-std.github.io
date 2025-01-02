
CREATE DATABASE study;

USE study;

CREATE TABLE config (
  `emailFrom` varchar(255) NOT NULL COMMENT "系统发送邮箱",
  `emailPassword` varchar(255) NOT NULL COMMENT "发送密钥",
  `emailHost` varchar(255) NOT NULL COMMENT "邮箱主机 (smtp.163.com)"
) COMMENT "配置表";

INSERT INTO config VALUES ("scnu_acm_rank@163.com", "BQajhTSmEmtHtnvk", "smtp.163.com");

CREATE TABLE user (
  `username` varchar(255) NOT NULL COMMENT "系统发送邮箱",
  `password` varchar(255) NOT NULL COMMENT "发送密钥",
  `email` varchar(255) NOT NULL COMMENT "邮箱主机 (smtp.163.com)",
  `type` int NOT NULL COMMENT "用户级别"
) COMMENT "用户表";

INSERT INTO user VALUES ("admin", "123456", "yinmingyang89@gmail.com", 0);

INSERT INTO user VALUES ("yyym", "123456", "3109778990@qq.com", 1);

 SELECT * FROM `user` WHERE username = 'yyym';

 SELECT * FROM config;

 ALTER TABLE config ADD img_path varchar(255) COMMENT "图片绝对路径";

  ALTER TABLE config ADD vedio_path varchar(255) COMMENT "视频绝对路径";
  ALTER TABLE config ADD tem_save_path varchar(255) COMMENT "临时保存绝对路径";

  UPDATE config SET img_path = "E:/sources/study/image/";
  UPDATE config SET vedio_path = "E:/sources/study/vedio/";
  UPDATE config SET tem_save_path = "E:/sources/study/temSave/";

CREATE TABLE vedio (
  `vedio_id` INT NOT NULL AUTO_INCREMENT COMMENT "视频的 ID",
  `vedio_name` varchar(255) NOT NULL COMMENT "视频的名称",
  `vedio_cover` varchar(255) NOT NULL COMMENT "视频封面",
  `description` varchar(255)  COMMENT "视频简介",
  `visable` BOOLEAN NOT NULL COMMENT "前台可见性",
  PRIMARY KEY (vedio_id)
) COMMENT "视频表";

CREATE TABLE playInfo (
  `vedio_id` INT NOT NULL COMMENT "视频的 ID",
  `num` INT NOT NULL COMMENT "第几集",
  `type` INT NOT NULL COMMENT "标识播放的类型",
  `url` VARCHAR(255) NOT NULL COMMENT "播放链接",
  FOREIGN KEY (vedio_id) REFERENCES vedio(vedio_id)
) COMMENT "播放信息表";

SELECT * FROM vedio;

ALTER TABLE playInfo ADD name varchar(255) COMMENT "视频的名称";


ALTER TABLE vedio ADD vedio_type varchar(255) COMMENT "视频的类别";

ALTER TABLE vedio CHANGE vedio_type type_id int COMMENT "视频的类别";

UPDATE vedio SET type_id = 1;

CREATE TABLE vedio_type (
  `type_id` INT AUTO_INCREMENT COMMENT "视频类型ID",
  `name` INT NOT NULL COMMENT "类型的名称",
  PRIMARY KEY (type_id)
) COMMENT "视频类型表";

ALTER TABLE vedio_type CHANGE name name VARCHAR(255) COMMENT "类型的名称";

ALTER TABLE vedio ADD CONSTRAINT FOREIGN KEY (type_id) REFERENCES vedio_type(type_id);

INSERT INTO vedio_type(name) VALUES ("动画");

INSERT INTO vedio_type(name) VALUES ("课程");

