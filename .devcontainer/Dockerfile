FROM ghcr.io/couryrr/devcontainer:0.1.1

RUN sudo apt update &&\
    sudo apt upgrade -y &&\
    sudo apt install -y golang-go

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && source /home/somedev/.zshrc \
    && nvm install --lts