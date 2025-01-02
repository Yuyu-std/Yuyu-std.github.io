package model

type VedioType struct {
	TypeId int    `gorm:"column:type_id;type:INT;" json:"TypeId"`
	Name   string `gorm:"column:name;type:VARCHAR(255);NOT NULL" json:"Name"`
}

func (m *VedioType) TableName() string {
	return "vedio_type"
}
