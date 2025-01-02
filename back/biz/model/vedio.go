package model

type Vedio struct {
	VedioId     int    `gorm:"column:vedio_id;type:int;NOT NULL" json:"VedioId"`
	VedioName   string `gorm:"column:vedio_name;type:varchar(255);NOT NULL" json:"VedioName"`
	VedioCover  string `gorm:"column:vedio_cover;type:varchar(255);NOT NULL" json:"VedioCover"`
	Description string `gorm:"column:description;type:varchar(255);" json:"Description"`
	Visable     bool   `gorm:"column:visable;type:boolean;NOT NULL" json:"Visable"`
	TypeId      int    `gorm:"column:type_id;type:INT;" json:"TypeId"`
}

func (m *Vedio) TableName() string {
	return "vedio"
}
