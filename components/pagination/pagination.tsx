import NextLink from "next/link";
import { MicroCMS_Category, MicroCMS_Tag } from "types";

type PagerProps = {
  currentPage: number;
  selectedCategory?: MicroCMS_Category;
  selectedTag?: MicroCMS_Tag;
  pager: [];
};

export const Pagination: React.FC<PagerProps> = (props) => {
  const getPath = (pageNumber: number) => {
    if (props.selectedCategory) {
      return `/blog/category/${props.selectedCategory.id}/page/${pageNumber}`;
    } else if (props.selectedTag) {
      return `/tag/${props.selectedTag.id}/page/${pageNumber}`;
    } else {
      return `/page/${pageNumber}`;
    }
  };
  return (
    <div>
      <ul>
        {props.currentPage > 1 && (
          <li>
            <NextLink
              href={getPath(props.currentPage - 1)}
              passHref
              prefetch={false}
            >
              <a>前のページへ</a>
            </NextLink>
          </li>
        )}
        {props.currentPage > 3 && (
          <li>
            <NextLink href={getPath(1)} passHref prefetch={false}>
              <a>1</a>
            </NextLink>
          </li>
        )}
        {props.currentPage > 4 && <li>...</li>}
        {props.pager.map((page, index) => {
          if (props.currentPage - 3 <= page && page <= props.currentPage + 1) {
            return (
              <li key={index}>
                <NextLink href={getPath(page + 1)} passHref prefetch={false}>
                  <a>{page + 1}</a>
                </NextLink>
              </li>
            );
          }
        })}
        {props.currentPage + 3 < props.pager.length && <li>...</li>}
        {props.currentPage + 2 < props.pager.length && (
          <li>
            <NextLink
              href={getPath(props.pager.length)}
              passHref
              prefetch={false}
            >
              <a>{props.pager.length}</a>
            </NextLink>
          </li>
        )}
        {props.currentPage < props.pager.length && (
          <li>
            <NextLink
              href={getPath(props.currentPage + 1)}
              passHref
              prefetch={false}
            >
              <a>次のページ</a>
            </NextLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
