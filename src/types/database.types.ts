/**
 * Database types
 * Auto-generated from Supabase schema
 * 
 * Run: supabase gen types typescript --project-id your-project-id > src/types/database.types.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: 'admin' | 'editor' | 'viewer'
          avatar_url: string | null
          locale: 'en' | 'fr'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: 'admin' | 'editor' | 'viewer'
          avatar_url?: string | null
          locale?: 'en' | 'fr'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: 'admin' | 'editor' | 'viewer'
          avatar_url?: string | null
          locale?: 'en' | 'fr'
          created_at?: string
          updated_at?: string
        }
      }
      // Add other tables as needed
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
