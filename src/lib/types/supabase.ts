export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			post: {
				Row: {
					content: string;
					created_at: string;
					id: string;
					user_id: string;
				};
				Insert: {
					content: string;
					created_at?: string;
					id?: string;
					user_id: string;
				};
				Update: {
					content?: string;
					created_at?: string;
					id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'post_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			users: {
				Row: {
					avatar_url: string;
					created_at: string;
					id: string;
					name: string;
					user_name: string;
				};
				Insert: {
					avatar_url: string;
					created_at?: string;
					id: string;
					name: string;
					user_name: string;
				};
				Update: {
					avatar_url?: string;
					created_at?: string;
					id?: string;
					name?: string;
					user_name?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'users_id_fkey';
						columns: ['id'];
						isOneToOne: true;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
