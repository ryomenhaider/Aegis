from dotenv import load_dotenv
import os

load_dotenv()

NEWS_API = os.getenv("NEWS_DATA_API")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_PUBLISHABLE_KEY")