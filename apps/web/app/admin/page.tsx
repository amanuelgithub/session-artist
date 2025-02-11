'use client';

import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { cookies, headers } from 'next/headers';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true,
});

export default function AdminPage() {
  const [searchParams] = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // console.log('token: ', getToken());
    // console.log('getToken() value = ', getToken());
    router.push('/admin');

    // setTimeout(() => {
    //   getToken();
    // }, 3000);

    // console.log('searchParams: ', searchParams[1]);
    //
    // keep this commented out for now
    // const axios = new Axios();
    // axios.interceptors.response.use(
    //   (response) => response,
    //   async (error) => {
    //     const originalRequest = error.config;
    //     if (
    //       error.response.status === 401 &&
    //       !originalRequest._retry &&
    //       originalRequest.url !== '/api/auth/login'
    //     ) {
    //       originalRequest._retry = true;
    //       const token = await getToken();
    //       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //       return axios.request(originalRequest);
    //     }
    //     return Promise.reject(error);
    //   },
    // );
  }, []);

  const refreshToken = () => {
    let data;
    axiosInstance
      .post(
        '/auth/refresh',
        {
          // refreshToken: searchParams && searchParams[1],
        },
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        console.log('response: ', response);
        data = response.data;
      });
    return data;
  };

  return (
    <div>
      AdminPage
      <button
        className="border border-gray-700 bg-gray-950 hover:bg-gray-700 text-white p-2 rounded-md"
        onClick={refreshToken}
      >
        {' '}
        refresh request:{' '}
      </button>
    </div>
  );
}
