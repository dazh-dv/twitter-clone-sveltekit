import type { Database } from './supabase';

export type PostEntity = Database['public']['Tables']['post']['Row'];
export type UserEntity = Database['public']['Tables']['users']['Row'];

export type PostType = PostEntity & {
	users: UserEntity;
};
