import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,

    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
} from 'react-share';

const url = window.location.href;

export const SharedButtons = ({song, artist}) => (
    <div
        style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    }}>
        <TwitterShareButton
            url={url}
            title={`I'm enjoying a song called: ${song} by ${artist}`}>
            <TwitterIcon size={32} round/>
        </TwitterShareButton>
        <FacebookShareButton
            url={url}
            quote={`I'm enjoying a song called: ${song} by ${artist}`}>
            <FacebookIcon size={32} round/>
        </FacebookShareButton>
        <WhatsappShareButton
            url={url}
            title={`I'm enjoying a song called: ${song} by ${artist}`}
            separator={':: '}>
            <WhatsappIcon size={32} round/>
        </WhatsappShareButton>
        <TelegramShareButton
            url={url}
            title={`I'm enjoying a song called: ${song} by ${artist}`}>
            <TelegramIcon size={32} round/>
        </TelegramShareButton>
    </div>
)