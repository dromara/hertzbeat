package org.dromara.hertzbeat.remoting.event;

import io.netty.channel.Channel;

/**
 */
public class NettyEvent {

    private final Channel channel;

    public NettyEvent(final Channel channel) {
        this.channel = channel;
    }

    public Channel getChannel() {
        return channel;
    }
}