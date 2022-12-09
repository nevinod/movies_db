from flask_api import status

INVALID_REQUEST = {"message": "Invalid request"}, status.HTTP_400_BAD_REQUEST

NOT_FOUND = {"message": "Not found"}, status.HTTP_404_NOT_FOUND

INTERNAL_SERVER_ERROR = {"message": "Internal Server Error"}, status.HTTP_500_INTERNAL_SERVER_ERROR




