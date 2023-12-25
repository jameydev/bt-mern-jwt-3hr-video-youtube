import { apiSlice } from './apiSlice';

const USERS_URL = '/api/users/';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['User'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        })
    })
});

export const { useLoginMutation, useLogoutMutation } = usersApiSlice;