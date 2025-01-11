package respmodel

import "back/biz/model"

type CarouselListResq struct {
	CarouselId  int
	Cover       string
	IfShowVedio bool
	Vedio       model.Vedio
}
