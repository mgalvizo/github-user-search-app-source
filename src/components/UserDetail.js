import React from 'react';
import { ReactComponent as Location } from '../assets/icon-location.svg';
import { ReactComponent as Website } from '../assets/icon-website.svg';
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg';
import { ReactComponent as Company } from '../assets/icon-company.svg';
import Spinner from './Spinner';
import './UserDetail.css';

const UserDetail = ({ user, error, isLoading }) => {
    if (!user || isLoading) {
        return <Spinner />;
    }

    const {
        avatar_url,
        bio,
        blog,
        company,
        created_at,
        followers,
        following,
        html_url,
        location,
        login,
        name,
        public_repos,
        twitter_username,
    } = user;

    const joined_date = new Date(created_at);
    const dateOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    };

    return (
        <div className="user-details">
            <div className="user-details__content">
                <div className="user-details__general-info">
                    <div className="user-details__avatar">
                        <img
                            src={avatar_url}
                            alt="Avatar"
                            width="460"
                            height="460"
                        />
                    </div>
                    <h1 className="user-details__name">
                        {name ? name : login}{' '}
                    </h1>
                    <h2 className="user-details__at">
                        <a
                            href={html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >{`@${login}`}</a>
                    </h2>
                    <div className="user-details__joined">
                        <p>
                            Joined{' '}
                            <time dateTime={joined_date.toISOString()}>
                                {joined_date.toLocaleDateString(
                                    'en-GB',
                                    dateOptions
                                )}
                            </time>
                        </p>
                    </div>

                    <div
                        className={`user-details__bio ${
                            !bio ? 'user-details__bio--na' : ''
                        }`}
                    >
                        {bio && <p>{bio}</p>}
                        {!bio && <p>This profile has no bio</p>}
                    </div>
                </div>
                <div className="user-details__gh-data">
                    <div className="three-col">
                        <div className="col col-1">
                            <div className="user-details__repos">
                                <h3>Repos</h3> <h4>{public_repos}</h4>
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="user-details__followers">
                                <h3>Followers</h3> <h4>{followers}</h4>
                            </div>
                        </div>
                        <div className="col col-3">
                            <div className="user-details__following">
                                <h3>Following</h3> <h4>{following}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-details__links">
                    <div
                        className={`user-details__link user-details__location ${
                            !location ? 'user-details__link--na' : ''
                        }`}
                    >
                        <Location />
                        {location ? location : 'Not Available'}
                    </div>
                    <div
                        className={`user-details__link user-details__blog ${
                            !blog ? 'user-details__link--na' : ''
                        }`}
                    >
                        <Website />
                        {blog && (
                            <a href={blog} target="_blank" rel="noreferrer">
                                {blog}
                            </a>
                        )}
                        {!blog && 'Not Available'}
                    </div>
                    <div
                        className={`user-details__link user-details__twitter ${
                            !twitter_username ? 'user-details__link--na' : ''
                        }`}
                    >
                        <Twitter />
                        {twitter_username && (
                            <a
                                href={`https://twitter.com/${twitter_username}`}
                                target="__blank"
                                rel="noreferrer"
                            >
                                {twitter_username}
                            </a>
                        )}
                        {!twitter_username && 'Not Available'}
                    </div>
                    <div
                        className={`user-details__link user-details__company ${
                            !company ? 'user-details__link--na' : ''
                        }`}
                    >
                        <Company />
                        {!company && 'Not Available'}
                        {company && (
                            <a
                                rel="noreferrer"
                                href={`https://github.com/${company.replace(
                                    '@',
                                    ''
                                )}`}
                                target="_blank"
                            >
                                {company}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
