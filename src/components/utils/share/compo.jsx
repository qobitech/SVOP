import React from 'react';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    // FacebookShareCount,
    // HatenaIcon,
    // HatenaShareButton,
    // HatenaShareCount,
    // InstapaperIcon,
    // InstapaperShareButton,
    // LineIcon,
    // LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    // LivejournalIcon,
    // LivejournalShareButton,
    // MailruIcon,
    // MailruShareButton,
    // OKIcon,
    // OKShareButton,
    // OKShareCount,
    // PinterestIcon,
    // PinterestShareButton,
    // PinterestShareCount,
    // PocketIcon,
    // PocketShareButton,
    RedditIcon,
    RedditShareButton,
    // RedditShareCount,
    TelegramIcon,
    TelegramShareButton,
    // TumblrIcon,
    // TumblrShareButton,
    // TumblrShareCount,
    TwitterIcon,
    TwitterShareButton,
    VKIcon,
    VKShareButton,
    // VKShareCount,
    ViberIcon,
    ViberShareButton,
    // WeiboIcon,
    // WeiboShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    // WorkplaceIcon,
    // WorkplaceShareButton
} from 'react-share';

export const ShareComponentNew = ({
    shareurl,
    quote,
    hashtag,
    size,
    onShare,
}) => {
    return (
        <div>
            <div className='fml-grid-small mt-4 justify-content-center justify-content-md-between'>
                {/* <ShareItem title='Facebook'>
                    <FacebookShareButton url={shareurl} quote={quote} hashtag={hashtag} onClick={onShare} >
                        <FacebookIcon 
                            size={size} 
                            round 
                            rotate 
                        />
                    </FacebookShareButton>
                </ShareItem> */}

                <ShareItem title='Messenger'>
                    <FacebookMessengerShareButton
                        url={shareurl}
                        quote={quote}
                        hashtag={hashtag}
                        onClick={onShare}
                    >
                        <FacebookMessengerIcon size={size} round rotate />
                    </FacebookMessengerShareButton>
                </ShareItem>

                {/* <ShareItem title='Linkedin'>
                    <LinkedinShareButton url={shareurl} quote={quote} hashtag={hashtag} onClick={onShare}>
                        <LinkedinIcon size={size} round rotate />
                    </LinkedinShareButton>
                </ShareItem> */}

                {/* <ShareItem title='Twitter'>
                    <TwitterShareButton url={shareurl} quote={quote} hashtag={hashtag} onClick={onShare}>
                        <TwitterIcon size={size} round rotate />
                    </TwitterShareButton>
                </ShareItem> */}

                {/* <ShareItem title='Whatsapp'>
                    <WhatsappShareButton url={shareurl} quote={quote} hashtag={hashtag} onClick={onShare}>
                        <WhatsappIcon size={size} round rotate />
                    </WhatsappShareButton>
                </ShareItem> */}

                <ShareItem title='Viber'>
                    <ViberShareButton
                        url={shareurl}
                        quote={quote}
                        hashtag={hashtag}
                        onClick={onShare}
                    >
                        <ViberIcon size={size} round rotate />
                    </ViberShareButton>
                </ShareItem>

                <ShareItem title='Telegram'>
                    <TelegramShareButton
                        url={shareurl}
                        quote={quote}
                        hashtag={hashtag}
                        onClick={onShare}
                    >
                        <TelegramIcon size={size} round rotate />
                    </TelegramShareButton>
                </ShareItem>

                {/* <ShareItem title='Email'>
                    <EmailShareButton url={shareurl} quote={quote} hashtag={hashtag} onClick={onShare}>
                        <EmailIcon size={size} round rotate />
                    </EmailShareButton>
                </ShareItem> */}

                <ShareItem title='Reddit'>
                    <RedditShareButton
                        url={shareurl}
                        quote={quote}
                        hashtag={hashtag}
                        onClick={onShare}
                    >
                        <RedditIcon size={size} round rotate />
                    </RedditShareButton>
                </ShareItem>

                <ShareItem title='VK'>
                    <VKShareButton
                        url={shareurl}
                        quote={quote}
                        hashtag={hashtag}
                        onClick={onShare}
                    >
                        <VKIcon size={size} round rotate />
                    </VKShareButton>
                </ShareItem>
            </div>
        </div>
    );
};

const ShareItem = ({ title, children }) => {
    return (
        <div className='rounded bg-hover hover d-flex flex-column align-items-center py-3'>
            <p className='font_small fml-break-text m-0 mb-1'>{title}</p>
            {children}
        </div>
    );
};
