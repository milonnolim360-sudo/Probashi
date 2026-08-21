<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Probashi</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f5f7fb;
            color: #222;
        }

        header {
            background: linear-gradient(135deg, #0066ff, #00c6ff);
            color: white;
            text-align: center;
            padding: 35px 15px;
        }

        header h1 {
            font-size: 36px;
            margin-bottom: 8px;
        }

        header p {
            font-size: 17px;
        }

        nav {
            background: white;
            padding: 15px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        nav a {
            text-decoration: none;
            color: #0066ff;
            font-weight: bold;
            margin: 0 12px;
        }

        .hero {
            max-width: 1000px;
            margin: 30px auto;
            padding: 45px 20px;
            text-align: center;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .hero h2 {
            font-size: 30px;
            margin-bottom: 15px;
        }

        .hero p {
            color: #666;
            font-size: 17px;
            line-height: 1.7;
        }

        .buttons {
            margin-top: 25px;
        }

        .btn {
            display: inline-block;
            padding: 13px 25px;
            margin: 7px;
            border-radius: 30px;
            text-decoration: none;
            color: white;
            background: #0066ff;
            font-weight: bold;
        }

        .btn:hover {
            opacity: 0.85;
        }

        .section {
            max-width: 1000px;
            margin: 30px auto;
            padding: 20px;
        }

        .section h2 {
            text-align: center;
            margin-bottom: 25px;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            padding: 25px;
            border-radius: 18px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(0,0,0,0.07);
        }

        .card h3 {
            margin-bottom: 10px;
            color: #0066ff;
        }

        .card p {
            color: #666;
            line-height: 1.6;
        }

        footer {
            margin-top: 40px;
            background: #111827;
            color: white;
            text-align: center;
            padding: 25px;
        }
    </style>
</head>

<body>

<header>
    <h1>Probashi</h1>
    <p>প্রবাসীদের জন্য আমাদের নিজস্ব অনলাইন প্ল্যাটফর্ম</p>
</header>

<nav>
    <a href="#">হোম</a>
    <a href="#">সংগঠন</a>
    <a href="#">সদস্য তালিকা</a>
    <a href="#">যোগাযোগ</a>
</nav>

<section class="hero">
    <h2>স্বাগতম Probashi ওয়েবসাইটে</h2>

    <p>
        প্রবাসীদের একসাথে নিয়ে একটি সুন্দর ও আধুনিক অনলাইন প্ল্যাটফর্ম।
        এখানে সংগঠন, সদস্য তালিকা এবং প্রয়োজনীয় তথ্য সহজে পাওয়া যাবে।
    </p>

    <div class="buttons">
        <a class="btn" href="#">সদস্য তালিকা</a>
        <a class="btn" href="#">সংগঠন</a>
    </div>
</section>

<section class="section">
    <h2>আমাদের বিভাগ</h2>

    <div class="cards">

        <div class="card">
            <h3>সংগঠন</h3>
            <p>আমাদের সংগঠন সম্পর্কে প্রয়োজনীয় তথ্য এখানে থাকবে।</p>
        </div>

        <div class="card">
            <h3>সদস্য তালিকা</h3>
            <p>সংগঠনের সদস্যদের তথ্য সুন্দরভাবে প্রদর্শন করা হবে।</p>
        </div>

        <div class="card">
            <h3>ছবি</h3>
            <p>সংগঠনের বিভিন্ন ছবি ও কার্যক্রম এখানে প্রকাশ করা যাবে।</p>
        </div>

        <div class="card">
            <h3>যোগাযোগ</h3>
            <p>প্রয়োজনীয় যোগাযোগের তথ্য এখানে থাকবে।</p>
        </div>

    </div>
</section>

<footer>
    <p>© 2026 Probashi — All Rights Reserved</p>
</footer>

</body>
</html>
