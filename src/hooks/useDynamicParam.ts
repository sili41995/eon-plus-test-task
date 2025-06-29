import { useParams } from 'react-router-dom';
import { PagePaths } from '@/constants';

const useDynamicParam = () => {
  const params = useParams();
  const dynamicParam = params[PagePaths.dynamicParam];

  return dynamicParam;
};

export default useDynamicParam;
