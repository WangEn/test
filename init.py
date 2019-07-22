#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import tornado.web
import tornado.ioloop


# 引入各路由模块
class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')
class MyFile(tornado.web.StaticFileHandler):
    def set_extra_headers(self, path):
        self.set_header("Cache-control", "no-cache")
class Application(tornado.web.Application):
    def __init__(self):
    
        handlers = [
            (r"/?", IndexHandler),
            (r"/(.*)", MyFile, {"path":""}),
        ]
        tornado.web.Application.__init__(self, handlers)

if __name__ == "__main__":
    http_server = tornado.httpserver.HTTPServer(
        Application()
    )
    http_server.listen(52102)
    tornado.ioloop.IOLoop.instance().start()