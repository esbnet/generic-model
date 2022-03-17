import { Article } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { ArticleListItem } from './ListItem';

export function ArticleIndex()  {
  const apiOptions = { relations: ['author'] };

  return (
    <RecordIndex<Article>
      ListItem={ArticleListItem}
      apiPath="articles"
      apiOptions={apiOptions}
    />
  );
};