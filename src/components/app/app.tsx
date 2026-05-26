import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';

import styles from './app.module.scss';

import {
	defaultArticleState,
	ArticleStateType,
} from './../../constants/articleProps';

export const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				articleState={articleState}
				setArticleState={setArticleState}
			/>
			<Article />
		</main>
	);
};
