package model

type CarouselInfo struct {
	CarouselId  int    `gorm:"column:carousel_id;type:int;NOT NULL" json:"CarouselId"`
	Cover       string `gorm:"column:cover;type:varchar(255);NOT NULL" json:"Cover"`
	IfShowVedio bool   `gorm:"column:if_show_vedio;type:boolean;NOT NULL" json:"IfShowVedio"`
	VedioId     int    `gorm:"column:vedio_id;type:int" json:"VedioId"`
}

func (m *CarouselInfo) TableName() string {
	return "carousel_info"
}
