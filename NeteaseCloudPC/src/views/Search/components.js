import { Link } from 'react-router-dom';
import { mediaTimeFormat, artistsFormat, } from '@/utils/utils';

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
                    <img src={img1v1Url} alt=""/>
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
                    <img src={picUrl} alt=""/>
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