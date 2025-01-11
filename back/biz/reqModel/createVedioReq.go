package reqmodel

type CreateVedioReq struct {
	VedioName   string `json:"VedioName"`
	VedioCover  string `json:"VedioCover"`
	Description string `json:"Description"`
	Visable     bool   `json:"Visable"`
	TypeId      int    `json:"TypeId"`
}
