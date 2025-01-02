package model

type PlayInfo struct {
	VedioId int    `gorm:"column:vedio_id;type:int;NOT NULL" json:"VedioId"`
	Num     int    `gorm:"column:num;type:int;NOT NULL" json:"Num"`
	Type    int    `gorm:"column:type;type:int;NOT NULL" json:"Type"`
	Name    string `gorm:"column:name;type:varchar(255);" json:"Name"`
	Url     string `gorm:"column:url;type:varchar(255);NOT NULL" json:"Url"`
}

func (m *PlayInfo) TableName() string {
	return "playinfo"
}
