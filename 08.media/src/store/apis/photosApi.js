import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV ONLY
const pause = duration => {
  return new Promise(resolve => setTimeout(resolve, duration));
};

const photosApi = createApi({
  reducerPath: 'photos',

  baseQuery: fetchBaseQuery({
    baseUrl: ' http://localhost:3005',
    fetchFn: async (...args) => {
      //DEV ONLY
      await pause(300);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map(photo => {
            return { type: 'Photo', id: photo.id };
          });
          tags.push({ type: 'AlbumPhotos', id: album.id });
          return tags;
        },
        query: album => {
          return {
            url: '/photos',
            params: {
              albumId: album.id,
            },
            method: 'GET',
          };
        },
      }),
      createPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: 'AlbumPhotos', id: album.id }];
        },
        query: album => {
          return {
            url: '/photos',
            method: 'POST',
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      deletePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: 'Photo', id: photo.id }];
        },
        query: photo => {
          return {
            url: `/photos/${photo.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useCreatePhotoMutation,
  useDeletePhotoMutation,
} = photosApi;
export { photosApi };
