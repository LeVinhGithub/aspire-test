<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    |
    | This option controls the default authentication "guard" and password
    | reset options for your application. You may change these defaults
    | as required, but they're a perfect start for most applications.
    |
    */

    'defaults' => [
        'guard' => 'applicants',
        'passwords' => 'applicants',
    ],

    /*
    |--------------------------------------------------------------------------
    | Authentication Guards
    |--------------------------------------------------------------------------
    |
    | Next, you may define every authentication guard for your application.
    | Of course, a great default configuration has been defined for you
    | here which uses session storage and the Eloquent user provider.
    |
    | All authentication drivers have a user provider. This defines how the
    | users are actually retrieved out of your database or other storage
    | mechanisms used by this application to persist your user's data.
    |
    | Supported: "session"
    |
    */

    'guards' => [
        'applicants' => [
            'driver' => 'jwt',
            'provider' => 'applicants',
        ],
        'company_users' => [
            'driver' => 'jwt',
            'provider' => 'company_users',
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    |
    | All authentication drivers have a user provider. This defines how the
    | users are actually retrieved out of your database or other storage
    | mechanisms used by this application to persist your user's data.
    |
    | If you have multiple user tables or models you may configure multiple
    | sources which represent each model / table. These sources may then
    | be assigned to any extra authentication guards you have defined.
    |
    | Supported: "database", "eloquent"
    |
    */

    'providers' => [
        'applicants' => [
            'driver' => 'eloquent',
            'model' => App\Models\Applicant::class,
        ],
        'company_users' => [
            'driver' => 'eloquent',
            'model' => App\Models\CompanyUser::class,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    |
    | You may specify multiple password reset configurations if you have more
    | than one user table or model in the application and you want to have
    | separate password reset settings based on the specific user types.
    |
    | The expire time is the number of minutes that each reset token will be
    | considered valid. This security feature keeps tokens short-lived so
    | they have less time to be guessed. You may change this as needed.
    |
    */

    'passwords' => [
        'applicants' => [
            'provider' => 'applicants',
            'table' => 'password_resets',
            'expire' => 1560,
            'throttle' => 60,
            'reset_password_url' => env('RESET_PASSWORD_URL', 'http//:localhost:3000/reset-password'),
        ],
        'company_users' => [
            'provider' => 'company_users',
            'table' => 'password_resets',
            'expire' => 1560,
            'throttle' => 60,
            'reset_password_url' => env('RESET_PASSWORD_URL', 'http//:localhost:3000/reset-password'),
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Password Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Here you may define the amount of seconds before a password confirmation
    | times out and the user is prompted to re-enter their password via the
    | confirmation screen. By default, the timeout lasts for three hours.
    |
    */

    'password_timeout' => 10800,

    'password_pattern' => '\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&amp;*-]).{8,}\z',

    'verification' => [
        'applicants' => [
            'verification_url' => env('VERIFICATION_URL', 'http//:localhost:3000/verify'),
            'expire' => 1440,
            'enable' => true,
        ],
        'company_users' => [
            'verification_url' => env('VERIFICATION_URL', 'http//:localhost:3000/verify'),
            'expire' => 1440,
            'enable' => true,
        ],
    ],

    'limiter' => [
        'applicants' => [
            'unlock_strategy' => App\Models\Authenticatable::UNLOCK_STRATEGY_TIME,
            'max_attempts' => 4,
            'unlock_in' => 240,
            'unlock_url' => env('UNLOCK_URL', 'http//:localhost:3000/unlock'),
        ],
        'company_users' => [
            'unlock_strategy' => App\Models\Authenticatable::UNLOCK_STRATEGY_TIME,
            'max_attempts' => 4,
            'unlock_in' => 240,
            'unlock_url' => env('UNLOCK_URL', 'http//:localhost:3000/unlock'),
        ],
    ],
];
