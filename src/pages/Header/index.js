import React from 'react';

import { HeaderRoot, HeaderItem, HeaderItemFull } from './styles';

import githubLogo from '../../images/GitHub-Mark-Light-32px.png';

export default function Header() {
    return (
        <HeaderRoot>
            <HeaderItem>
                <a href="https://github.com/ahcantarim" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="View on GitHub" />
                </a>
            </HeaderItem>
            <HeaderItem><a href="https://github.com/ahcantarim" target="_blank" rel="noopener noreferrer"><strong>ahcantarim</strong></a></HeaderItem>
            <HeaderItem><strong>/</strong></HeaderItem>
            <HeaderItem><a href="https://github.com/ahcantarim/react-link-preview" target="_blank" rel="noopener noreferrer">react-link-preview</a></HeaderItem>
            <HeaderItem>/</HeaderItem>
            <HeaderItemFull>A link previewer for studying purposes made in ReactJS</HeaderItemFull>
        </HeaderRoot>
    );
}