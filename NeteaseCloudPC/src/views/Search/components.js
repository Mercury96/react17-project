import { Link } from 'react-router-dom';
import { mediaTimeFormat, artistsFormat, playTimesFormat } from '@/utils/utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';

export const SongItem = (props) => {
    const { i, name, mv, ar, al, dt, } = props;
    return (
        <div className={['item f-cb h-flag', i%2?'':'even'].join(' ')}>
            <div className="td">
                <div className="hd">
                    <i className="ply"></i>
                </div>
            </div>
            <div className="td w0">
                <div className="sn">
                    <div className="text">
                        <Link to="">{ name }</Link>
                        { mv ? <Link to="" className="mv"></Link> : null }
                    </div>
                </div>
            </div>
            <div className="td">
                <div className="opt hshow">
                    <i className="u-icn u-icn-81 icn-add"></i>
                    <i className="icn icn-fav"></i>
                    <i className="icn icn-share"></i>
                    <i className="icn icn-dl"></i>
                </div>
            </div>
            <div className="td w1">
                <div className="text">
                    <Link to="">{ artistsFormat(ar) }</Link>
                </div>
            </div>
            <div className="td w2">
                <div className="text">
                    <Link to="">《{al.name}》</Link>
                </div>
            </div>
            <div className="td">{ mediaTimeFormat(dt/1000) }</div>
        </div>
    )
}

export const SingerItem = (props) => {
    const { img1v1Url, name } = props;
    return (
        <li>
            <div className="u-cover u-cover-5">
                <Link to="">
                    <LazyLoadImage 
                    width={130} 
                    height={130} 
                    src={img1v1Url}
                    placeholderSrc="http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=130y130"
                    >
                    </LazyLoadImage>
                    <span className="msk"></span>
                </Link>
            </div>
            <p>
                <Link to="" className="nm f-thide s-fc0">
                    { name }
                </Link>
                <Link to="">
                <i className="u-icn u-icn-5"></i>
                </Link>
            </p>
        </li>
    )
}

export const AlbumItem = (props) => {
    const { picUrl, name, artists, } = props;
    return (
        <li>
            <div className="u-cover u-cover-alb2">
                <Link to="">
                    <LazyLoadImage width={130} height={130} src={picUrl}>
                    </LazyLoadImage>
                    <span className="msk"></span>
                </Link>
                <Link to="" className="icon-play f-alpha f-fr">
                </Link>
            </div>
            <p className="dec">
                <Link to="" className="tit f-thide s-fc0">
                    { name }
                </Link>
            </p>
            <p>
                <span className="nm f-thide">
                    <Link to="" className="s-fc3">
                        { artistsFormat(artists) }
                    </Link>
                </span>
            </p>
        </li>
    )
}

export const VideoItem = (props) => {
    const { coverUrl, playTime, title, creator, durationms, markTypes } = props;
    return (
        <li>
            <div className="cover f-pr">
                <LazyLoadImage width={159} height={90} src={coverUrl}>
                </LazyLoadImage>
                <span className="msk"></span>
                <p className="tr u-msk u-msk-1">
                    <span className="u-icn2 u-icn2-mv">
                    </span>
                    { playTimesFormat(playTime) }
                </p>
                <p className="bl u-msk u-msk-2">{ mediaTimeFormat(durationms/1000) }</p>
                <Link to="" className="link"></Link>
            </div>
            <h4 className="title f-thide">
                { markTypes == null ? (<i className="tag u-icn2 u-icn2-smvtag"></i>) : null }
                <Link to="" className="s-fc0">{ title }</Link>
            </h4>
            <h5 className="name f-thide">
                { markTypes != null ? 'by' : null} <Link to="" className="s-fc3">{ artistsFormat(creator, 'userName') }</Link>
            </h5>
        </li>
    )
}

export const LrcItem = (props) => {
    const { lyrics } = props;
    const [open, changeOpen] = useState(false);
    function changeOpens() {
        changeOpen(prev => !prev);
    }
    return (
        <div className="lyric">
            <div className={!open ? 'lrc_all' : ''}>
                {
                    lyrics.map(item => {
                        return (
                            <p key={item + Math.random()} dangerouslySetInnerHTML={{ __html: item }}></p>
                        )
                    })
                }
            </div>
            <div className="crl">
                <em className="s-fc3" onClick={changeOpens}>
                    展开
                    <i className={["u-icn", !open ? 'u-icn-69' : 'u-icn-70'].join(' ')}></i>
                </em>
            </div>
        </div>
    )
}

const PlayTr = (props) => {
    const { 
        i,
        coverImgUrl, 
        name, 
        trackCount, 
        creator, 
        bookCount, 
        playCount } = props;
    return (
        <tr className={["h-flag", i % 2 ? 'even' : ''].join(' ')}>
            <td className="first w0">
                <div className="hd">
                    <span className="ply"></span>
                </div>
            </td>
            <td className="w7">
                <div className="u-cover u-cover-3">
                    <Link to="" className="">
                        <img src={coverImgUrl} alt=""/>
                        <span className="msk"></span>
                    </Link>
                </div>
            </td>
            <td>
                <div className="f-cb">
                    <div className="opt hshow">
                        <span className="u-icn u-icn-81"></span>
                        <span className="icn icn-fav"></span>
                        <span className="icn icn-share"></span>
                    </div>
                    <div className="tt">
                        <div className="ttc">
                            <span className="txt">
                                <Link to="">
                                    <span className="s-fc7">{ name }</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="w11 s-fc4">
            { trackCount }首
            </td>
            <td className="w4">
                <div className="text">
                    <span className="s-fc3">
                        by
                    </span>
                    { creator.nickname } 
                    <sup className="u-icn u-icn-84"></sup>
                </div>
            </td>
            <td className="w6 s-fc4">
            收藏：<span>{ playTimesFormat(bookCount) }</span>
            </td>
            <td className="last w6 s-fc4">
            收听：<span>{ playTimesFormat(playCount) }</span>
            </td>
        </tr>
    )
}

export const PlayLists = (props) => {
    const {list = []} = props;
    return (
        <table className="m-table m-table-2 m-table-2-cover">
            <tbody>
                {
                    list.map((tr, i) => {
                        return (
                            <PlayTr key={tr.id} {...tr} i={i} /> 
                        )
                    })
                }
            </tbody>
        </table>
    )
}