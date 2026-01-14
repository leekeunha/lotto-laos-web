#!/bin/bash

git pull origin develop 
yarn --immutable
yarn build
export NODE_ENV=develop

# 프로세스 이름과 시작 스크립트 매핑
declare -A ProcessMap
ProcessMap["laos_member_web"]="laos_member_web"

# 프로세스 시작 또는 재시작 함수
function manageProcess() {
    local processName=$1
    local startScript=${ProcessMap[$processName]}

    # PM2에서 프로세스 관리 여부 확인
    pm2 describe $processName > /dev/null
    local status=$?

    if [ $status -eq 0 ]; then
        echo "프로세스 $processName이(가) 이미 실행 중입니다. 재시작합니다..."
        pm2 restart $processName
    else
        echo "프로세스 $processName이(가) 실행 중이지 않습니다. $startScript로 시작합니다..."
    pm2 start yarn --name $processName -- vite --port 6200
    fi

    # 명령어 성공 여부 확인
    if [ $? -eq 0 ]; then
        echo "프로세스 $processName 관리에 성공했습니다."
    else
        echo "프로세스 $processName 관리에 실패했습니다."
    fi
}

# 프로세스 이름을 순회하며 각각 관리
for processName in "${!ProcessMap[@]}"; do
    manageProcess $processName
done

