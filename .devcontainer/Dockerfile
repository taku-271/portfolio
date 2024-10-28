FROM debian

RUN apt-get update
RUN apt-get install -y zip unzip curl git gpg

RUN curl -fsSL https://bun.sh/install | bash

ARG USERNAME=bun
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME\
    && chmod 0440 /etc/sudoers.d/$USERNAME 

WORKDIR /workspace
