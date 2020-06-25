import React, { useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

import { Input, Card, Space } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

import { Body } from './styles';

const { Meta } = Card;
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

const getPreviewData = (tags) => {
    const result = tags.reduce((previewData, item) => {
        switch (item.tag) {
            case 'og:title':
                previewData.title = item.value;
                break;
            case 'og:url':
                previewData.link = item.value;
                break;
            case 'og:description':
                previewData.description = item.value;
                break;
            case 'og:site_name':
                previewData.site = item.value;
                break;
            case 'og:image':
                previewData.image = item.value;
                break;
            default:
                break;
        }

        return previewData;
    }, {});

    return Promise.resolve(result);
}

const parseHTML = (html) => {
    const $ = cheerio.load(html);

    const meta = [];

    $('head meta').map((i, item) => {
        if (!item.attribs)
            return null;

        const property = item.attribs.property || null;
        const content = item.attribs.content || null;

        if (!property || !content)
            return null;

        meta.push({ tag: property, value: content });

        return null;
    });

    return Promise.resolve(meta);
}

const fetchUrl = (url) => {
    return axios(CORS_PROXY + url)
        .then(response => response.data);
}

const getUrl = (text) => {
    if (!text)
        return null;

    const a = document.createElement('a');
    a.href = text;

    const { protocol, host, pathname, search, hash } = a;

    const url = `${protocol}//${host}${pathname}${search}${hash}`;

    const isSameHost = (host === window.location.host);
    if (isSameHost)
        return null;

    return url;
};

export default function Home() {

    const [previewData, setPreviewData] = useState(null);

    const onBlur = (e) => {
        const url = getUrl(e.target.value);

        if (!url)
            return null;

        fetchUrl(url)
            .then(parseHTML)
            .then(getPreviewData)
            .then(setPreviewData)
            .then(console.log)
            .catch(console.error);
    }

    return (
        <Body>
            <Space
                direction="vertical"
                style={{ width: "100%" }}
            >
                <Input
                    size="large"
                    onBlur={onBlur}
                    placeholder="Cole uma URL para visualização"
                    prefix={<LinkOutlined />}
                />

                {previewData && (
                    <Card
                        title={previewData.site || previewData.title}
                        extra={<a href={previewData.link} target="_blank" rel="noopener noreferrer">Leia mais...</a>}
                        style={{ width: "100%" }}
                        cover={
                            <img
                                alt={previewData.title}
                                src={previewData.image}
                            />
                        }
                    >
                        <Meta
                            title={previewData.title}
                            description={previewData.description}
                        />
                    </Card>
                )}
            </Space>
        </Body>
    );
}