package respmodel

import "back/biz/model"

type VedioTableItemResq struct {
	VedioId      int
	VedioName    string
	Visable      bool
	Episode      int
	TypeId       int
	VedioCover   string
	Description  string
	EpisodeInfos []model.PlayInfo
}
