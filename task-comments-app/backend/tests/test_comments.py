import json
import pytest
from models import Comment, db

class TestCommentsCRUD:
    """Test CRUD operations for comments"""

    def test_create_comment_success(self, client):
        """Test successful comment creation"""
        data = {
            'content': 'This is a test comment',
            'author': 'John Doe'
        }
        
        response = client.post(
            '/api/tasks/1/comments',
            data=json.dumps(data),
            content_type='application/json'
        )
        
        assert response.status_code == 201
        json_data = json.loads(response.data)
        assert json_data['success'] is True
        assert json_data['data']['content'] == 'This is a test comment'
        assert json_data['data']['author'] == 'John Doe'
        assert json_data['data']['task_id'] == 1

    def test_create_comment_missing_content(self, client):
        """Test comment creation with missing content"""
        data = {'author': 'John Doe'}
        
        response = client.post(
            '/api/tasks/1/comments',
            data=json.dumps(data),
            content_type='application/json'
        )
        
        assert response.status_code == 400
        json_data = json.loads(response.data)
        assert json_data['success'] is False

    def test_get_comments_for_task(self, client, sample_comment):
        """Test retrieving comments for a specific task"""
        response = client.get('/api/tasks/1/comments')
        
        assert response.status_code == 200
        json_data = json.loads(response.data)
        assert json_data['success'] is True
        assert json_data['count'] == 1
        assert len(json_data['data']) == 1

    def test_get_single_comment(self, client, sample_comment):
        """Test retrieving a single comment"""
        response = client.get(f'/api/comments/{sample_comment.id}')
        
        assert response.status_code == 200
        json_data = json.loads(response.data)
        assert json_data['success'] is True
        assert json_data['data']['id'] == sample_comment.id

    def test_update_comment_success(self, client, sample_comment):
        """Test successful comment update"""
        data = {
            'content': 'Updated comment content',
            'author': 'Updated Author'
        }
        
        response = client.put(
            f'/api/comments/{sample_comment.id}',
            data=json.dumps(data),
            content_type='application/json'
        )
        
        assert response.status_code == 200
        json_data = json.loads(response.data)
        assert json_data['success'] is True
        assert json_data['data']['content'] == 'Updated comment content'

    def test_delete_comment_success(self, client, sample_comment):
        """Test successful comment deletion"""
        response = client.delete(f'/api/comments/{sample_comment.id}')
        
        assert response.status_code == 200
        json_data = json.loads(response.data)
        assert json_data['success'] is True
        
        # Verify comment is deleted
        get_response = client.get(f'/api/comments/{sample_comment.id}')
        assert get_response.status_code == 404

    def test_get_nonexistent_comment(self, client):
        """Test retrieving non-existent comment"""
        response = client.get('/api/comments/999')
        
        assert response.status_code == 404
        json_data = json.loads(response.data)
        assert json_data['success'] is False