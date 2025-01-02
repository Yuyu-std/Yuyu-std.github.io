package main

import (
	"back/biz/handler"
	"back/biz/middle"
	"context"
	"log"

	"github.com/cloudwego/hertz/pkg/app"
	"github.com/cloudwego/hertz/pkg/app/server"
	"github.com/cloudwego/hertz/pkg/common/utils"
	"github.com/cloudwego/hertz/pkg/protocol/consts"
)

func customizedRegister(r *server.Hertz) {

	auth, err := middle.GetJwt()
	if err != nil {
		panic(err)
	}
	errInit := auth.MiddlewareInit()

	if errInit != nil {
		log.Fatal("authMiddleware.MiddlewareInit() Error:" + errInit.Error())
	}

	// test ping pong
	r.GET("/ping", func(c context.Context, ctx *app.RequestContext) {
		handler.DivVedio(1, 1, "test.mp4")
		ctx.JSON(consts.StatusOK, utils.H{"message": "pong"})
	})
	r.GET("/showVedio", handler.ShowVedioHandler)

	r.POST("/login", auth.LoginHandler)
	r.GET("/image/:filename", handler.ImageHandler)

	r.GET("/vedioType", handler.VedioTypeHandler)
	r.GET("/showIndex", handler.ShowIndexHandler)

	root := r.Group("root")
	root.Use(auth.MiddlewareFunc())
	root.POST("/uploadImg", handler.UploadImgHandler)
	root.POST("/uploadVedio", handler.UploadVedioHandler)
	root.POST("/createVedio", handler.CreateVedioHandler)
	root.POST("/editVedio", handler.EditVedioHandler)
	root.GET("/showVedio", handler.ShowVedioHandler)
	root.GET("/vedioType", handler.VedioTypeHandler)
}
