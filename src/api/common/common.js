import serve from '../index';

export function getComment(){
  return serve.get('/api/comment')
}