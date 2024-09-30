import nltk
import os

import nltk.downloader

# Get the default nltk data path
try:
    # Check if a specific resource from the 'popular' package exists
    nltk.data.find('tokenizers/punkt')
    print('Popular resources are already available.')
except LookupError:
    print('Popular resources not found, downloading...')
    nltk.download('popular')
# Check if nltk_data directory exists and if popular data has been downloaded
# if not os.path.exists(nltk_data_path):
#     nltk.download('popular')
# else:
#     print("NLTK 'popular' data already downloaded.")
