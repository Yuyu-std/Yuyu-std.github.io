package middle

type Result struct {
	Code int
	Msg  string
	Data interface{}
}

func FailWithMsg(msg string) *Result {
	return &Result{
		Code: 0,
		Msg:  msg,
		Data: nil,
	}
}

func SuccessWithDate(data interface{}) *Result {
	return &Result{
		Code: 1,
		Msg:  "Success",
		Data: data,
	}
}

func SuccessWithNil() *Result {
	return &Result{
		Code: 1,
		Msg:  "Success",
		Data: nil,
	}
}
