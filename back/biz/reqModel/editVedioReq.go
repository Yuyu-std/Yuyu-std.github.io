package reqmodel

import "back/biz/model"

type EditVedio struct {
	VedioId      int              `json:"VedioId"`
	VedioName    string           `json:"VedioName"`
	TypeId       int              `json:"TypeId"`
	Visable      bool             `json:"Visable"`
	Episode      int              `json:"Episode"`
	VedioCover   string           `json:"VedioCover"`
	Description  string           `json:"Description"`
	EpisodeInfos []model.PlayInfo `json:"EpisodeInfos"`
}
