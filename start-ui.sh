#! /bin/bash
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-armhf
echo "PATH:" $PATH
export PATH=/home/pi/.local/bin:/home/pi/lab/dev/db-derby-10.15.1.3-bin/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games:/snap/bin:$JAVA_HOME/bin:$PATH

echo "Updated PATH:" $PATH
echo "java home:" $JAVA_HOME
echo "node version:"`node --version`
echo "current working dir:" `pwd`
cd /home/pi/lab/myapp/assetz/assetz-ui
echo "changed the workinng directory to:" `pwd`
echo "serve version:" `serve --version`
nohup serve -s build > app.log 2>&1 &

echo "successfully started the assetz node server.."
