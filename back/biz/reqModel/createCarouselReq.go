package reqmodel

type CreateCarouselReq struct {
	Cover       string `json:"Cover"`
	IfShowVedio bool   `json:"IfShowVedio"`
	VedioId     int    `json:"VedioId"`
}
