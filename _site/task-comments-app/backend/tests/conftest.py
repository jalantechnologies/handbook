import pytest
from app import create_app
from models import db, Comment
from config import TestConfig

@pytest.fixture
def app():
    """Create application for testing"""
    app = create_app(TestConfig)
    
    with app.app_context():
        db.create_all()
        yield app
        db.session.remove()
        db.drop_all()

@pytest.fixture
def client(app):
    """Test client"""
    return app.test_client()

@pytest.fixture
def sample_comment(app):
    """Create a sample comment for testing"""
    with app.app_context():
        comment = Comment(
            task_id=1,
            content="Test comment",
            author="Test Author"
        )
        db.session.add(comment)
        db.session.commit()
        return comment