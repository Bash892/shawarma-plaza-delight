from flask import Flask, render_template, jsonify, url_for, send_from_directory
import os

app = Flask(__name__, 
            static_folder="static", 
            static_url_path="/static",
            template_folder="templates")

# Menu items with proper image paths
menu_items = [
    {
        "name": "Classic Chicken Shawarma",
        "price": 12.99,
        "description": "Tender marinated chicken wrapped in warm pita with garlic sauce",
        "category": "shawarma",
        "image": "chicken-shawarma.jpg",
        "allergens": ["gluten", "dairy"]
    },
    {
        "name": "Beef Shawarma Plate",
        "price": 15.99,
        "description": "Seasoned beef served with rice, salad, and tahini",
        "category": "plates",
        "image": "beef-shawarma.jpg",
        "allergens": ["gluten", "sesame"]
    },
    {
        "name": "Falafel Wrap",
        "price": 10.99,
        "description": "Crispy falafel with fresh vegetables and tahini sauce",
        "category": "vegetarian",
        "image": "falafel-wrap.jpg",
        "allergens": ["gluten", "sesame"],
        "vegetarian": True
    },
    {
        "name": "Mixed Grill Platter",
        "price": 24.99,
        "description": "Combination of chicken, beef, and lamb kebabs",
        "category": "plates",
        "image": "mixed-grill.jpg",
        "allergens": ["gluten"]
    },
    {
        "name": "Hummus Bowl",
        "price": 8.99,
        "description": "Creamy hummus topped with olive oil and paprika",
        "category": "appetizers",
        "image": "hummus.jpg",
        "allergens": ["sesame"],
        "vegetarian": True,
        "vegan": True
    },
    {
        "name": "Tabbouleh Salad",
        "price": 7.99,
        "description": "Fresh parsley salad with bulgur, tomatoes, and lemon",
        "category": "salads",
        "image": "tabbouleh.jpg",
        "allergens": ["gluten"],
        "vegetarian": True,
        "vegan": True
    },
    {
        "name": "Lamb Shawarma",
        "price": 16.99,
        "description": "Premium lamb with Mediterranean spices and yogurt sauce",
        "category": "shawarma",
        "image": "lamb-shawarma.jpg",
        "allergens": ["gluten", "dairy"]
    },
    {
        "name": "Baba Ganoush",
        "price": 8.99,
        "description": "Smoky eggplant dip with tahini and garlic",
        "category": "appetizers",
        "image": "baba-ganoush.jpg",
        "allergens": ["sesame"],
        "vegetarian": True,
        "vegan": True
    },
    {
        "name": "Baklava",
        "price": 5.99,
        "description": "Sweet pastry with honey and pistachios",
        "category": "desserts",
        "image": "baklava.jpg",
        "allergens": ["gluten", "nuts", "dairy"]
    },
    {
        "name": "Fresh Lemonade",
        "price": 3.99,
        "description": "House-made mint lemonade",
        "category": "drinks",
        "image": "lemonade.jpg",
        "vegetarian": True,
        "vegan": True
    }
]

@app.route('/')
def home():
    """Main landing page"""
    return render_template('index.html', menu_items=menu_items)

@app.route('/menu')
def menu():
    """Menu page"""
    return render_template('index.html', menu_items=menu_items)

@app.route('/about')
def about():
    """About page"""
    return render_template('index.html')

@app.route('/contact')
def contact():
    """Contact page"""
    return render_template('index.html')

# CRITICAL: This route serves assets from /assets/ for Vite compatibility
@app.route('/assets/<path:filename>')
def serve_assets(filename):
    """
    Serve assets from /assets/ path (for Vite compatibility)
    This allows React components to load images using /assets/image.jpg
    """
    assets_path = os.path.join(app.static_folder, 'assets')
    
    # Debug logging
    full_path = os.path.join(assets_path, filename)
    print(f"🔍 Attempting to serve: {filename}")
    print(f"📁 Full path: {full_path}")
    print(f"✅ Exists: {os.path.exists(full_path)}")
    
    if not os.path.exists(full_path):
        print(f"❌ File not found: {full_path}")
        return f"File not found: {filename}", 404
    
    return send_from_directory(assets_path, filename)

# API endpoints for dynamic content
@app.route('/api/menu')
def api_menu():
    """API endpoint to fetch menu items as JSON"""
    return jsonify(menu_items)

@app.route('/api/menu/<category>')
def api_menu_category(category):
    """API endpoint to fetch menu items by category"""
    filtered_items = [item for item in menu_items if item.get('category') == category]
    return jsonify(filtered_items)

# Static file helper route (for debugging)
@app.route('/debug/static')
def debug_static():
    """Debug route to list all static files"""
    static_files = []
    assets_path = os.path.join(app.static_folder, 'assets')
    
    if os.path.exists(assets_path):
        for file in os.listdir(assets_path):
            static_files.append(f"assets/{file}")
    
    return jsonify({
        'static_folder': app.static_folder,
        'assets_path': assets_path,
        'files': static_files,
        'total_files': len(static_files)
    })

# Catch-all route for React Router (must be last!)
@app.route('/<path:path>')
def catch_all(path):
    """
    Catch-all route for client-side routing
    This ensures React Router can handle navigation
    """
    # Check if it's a static file request that 404'd
    if '.' in path and not path.startswith('api/'):
        return f"File not found: {path}", 404
    
    # Otherwise, return the main app for React Router to handle
    return render_template('index.html', menu_items=menu_items)

# Error handlers
@app.errorhandler(404)
def not_found(e):
    """Handle 404 errors by returning the React app"""
    return render_template('index.html', menu_items=menu_items)

@app.errorhandler(500)
def server_error(e):
    """Handle 500 errors"""
    return jsonify(error=str(e)), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    
    # Verify static folder exists
    static_full_path = os.path.abspath(app.static_folder)
    assets_full_path = os.path.join(static_full_path, 'assets')
    
    print("\n" + "="*70)
    print("🍖 Shawarma Plaza Delight - Flask Server")
    print("="*70)
    
    if not os.path.exists(static_full_path):
        print(f"❌ WARNING: static folder not found at {static_full_path}")
    else:
        print(f"✅ Static folder found at {static_full_path}")
    
    if not os.path.exists(assets_full_path):
        print(f"❌ WARNING: assets folder not found at {assets_full_path}")
    else:
        asset_files = os.listdir(assets_full_path)
        images = [f for f in asset_files if f.endswith(('.jpg', '.png', '.svg', '.webp'))]
        print(f"✅ Assets folder found with {len(images)} images")
    
    # Verify template folder exists
    if not os.path.exists(app.template_folder):
        print(f"❌ WARNING: template folder not found at {app.template_folder}")
    else:
        print(f"✅ Template folder found at {app.template_folder}")
    
    print(f"\n🚀 Server starting on http://127.0.0.1:{port}")
    print(f"📱 Also accessible at http://0.0.0.0:{port}")
    print(f"🔍 Debug endpoint: http://127.0.0.1:{port}/debug/static")
    print(f"📋 API menu: http://127.0.0.1:{port}/api/menu")
    print("="*70 + "\n")
    
    app.run(host='0.0.0.0', port=port, debug=True)