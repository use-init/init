# !/bin/sh
port="${3000:-8000}"
open -g "http://localhost:$port"
ruby -r webrick -e "s = WEBrick::HTTPServer.new(:Port => $port, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start"
