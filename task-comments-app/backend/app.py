from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, Comment
from config import Config
import os

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Initialize extensions
    db.init_app(app)
    migrate = Migrate(app, db)
    CORS(app)
    
    # Create tables
    with app.app_context():
        db.create_all()
    
    # Routes
    @app.route('/api/tasks/<int:task_id>/comments', methods=['GET'])
    def get_comments(task_id):
        """Get all comments for a specific task"""
        try:
            comments = Comment.query.filter_by(task_id=task_id).order_by(Comment.created_at.desc()).all()
            return jsonify({
                'success': True,
                'data': [comment.to_dict() for comment in comments],
                'count': len(comments)
            }), 200
        except Exception as e:
            return jsonify({
                'success': False,
                'error': str(e)
            }), 500

    @app.route('/api/tasks/<int:task_id>/comments', methods=['POST'])
    def create_comment(task_id):
        """Create a new comment for a task"""
        try:
            data = request.get_json()
            
            # Validation
            if not data or not data.get('content') or not data.get('author'):
                return jsonify({
                    'success': False,
                    'error': 'Content and author are required'
                }), 400
            
            comment = Comment(
                task_id=task_id,
                content=data['content'].strip(),
                author=data['author'].strip()
            )
            
            db.session.add(comment)
            db.session.commit()
            
            return jsonify({
                'success': True,
                'data': comment.to_dict(),
                'message': 'Comment created successfully'
            }), 201
            
        except Exception as e:
            db.session.rollback()
            return jsonify({
                'success': False,
                'error': str(e)
            }), 500

    @app.route('/api/comments/<int:comment_id>', methods=['GET'])
    def get_comment(comment_id):
        """Get a specific comment"""
        try:
            comment = Comment.query.get_or_404(comment_id)
            return jsonify({
                'success': True,
                'data': comment.to_dict()
            }), 200
        except Exception as e:
            return jsonify({
                'success': False,
                'error': str(e)
            }), 404

    @app.route('/api/comments/<int:comment_id>', methods=['PUT'])
    def update_comment(comment_id):
        """Update a specific comment"""
        try:
            comment = Comment.query.get_or_404(comment_id)
            data = request.get_json()
            
            # Validation
            if not data or not data.get('content'):
                return jsonify({
                    'success': False,
                    'error': 'Content is required'
                }), 400
            
            comment.content = data['content'].strip()
            if 'author' in data:
                comment.author = data['author'].strip()
            
            db.session.commit()
            
            return jsonify({
                'success': True,
                'data': comment.to_dict(),
                'message': 'Comment updated successfully'
            }), 200
            
        except Exception as e:
            db.session.rollback()
            return jupytext({
                'success': False,
                'error': str(e)
            }), 500

    @app.route('/api/comments/<int:comment_id>', methods=['DELETE'])
    def delete_comment(comment_id):
        """Delete a specific comment"""
        try:
            comment = Comment.query.get_or_404(comment_id)
            db.session.delete(comment)
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Comment deleted successfully'
            }), 200
            
        except Exception as e:
            db.session.rollback()
            return jsonify({
                'success': False,
                'error': str(e)
            }), 500

    @app.route('/api/tasks', methods=['GET'])
    def get_tasks():
        """Get all tasks (mock data for now)"""
        mock_tasks = [
            {'id': 1, 'title': 'Setup Project Structure', 'status': 'completed', 'description': 'Create the basic folder structure and files'},
            {'id': 2, 'title': 'Implement Backend APIs', 'status': 'in-progress', 'description': 'Build CRUD APIs for comments'},
            {'id': 3, 'title': 'Build Frontend Interface', 'status': 'pending', 'description': 'Create React components for task management'},
            {'id': 4, 'title': 'Add Authentication', 'status': 'pending', 'description': 'Implement user authentication system'},
            {'id': 5, 'title': 'Deploy Application', 'status': 'pending', 'description': 'Deploy to production environment'}
        ]
        
        return jsonify({
            'success': True,
            'data': mock_tasks,
            'count': len(mock_tasks)
        }), 200

    @app.route('/api/tasks/<int:task_id>', methods=['GET'])
    def get_task(task_id):
        """Get a specific task"""
        mock_tasks = {
            1: {'id': 1, 'title': 'Setup Project Structure', 'status': 'completed', 'description': 'Create the basic folder structure and files'},
            2: {'id': 2, 'title': 'Implement Backend APIs', 'status': 'in-progress', 'description': 'Build CRUD APIs for comments'},
            3: {'id': 3, 'title': 'Build Frontend Interface', 'status': 'pending', 'description': 'Create React components for task management'},
            4: {'id': 4, 'title': 'Add Authentication', 'status': 'pending', 'description': 'Implement user authentication system'},
            5: {'id': 5, 'title': 'Deploy Application', 'status': 'pending', 'description': 'Deploy to production environment'}
        }
        
        task = mock_tasks.get(task_id)
        if not task:
            return jsonify({
                'success': False,
                'error': 'Task not found'
            }), 404
        
        return jsonify({
            'success': True,
            'data': task
        }), 200

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            'success': False,
            'error': 'Resource not found'
        }), 404

    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({
            'success': False,
            'error': 'Internal server error'
        }), 500

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)