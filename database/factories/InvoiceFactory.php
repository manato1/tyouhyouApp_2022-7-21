<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class InvoiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => '11',
            'from' => 'lara会社\r\nlara部\r\nテスト',
            'for' => '架空会社\r\nlara部\r\nテスト',
            'date' => now(),
            'deadline' => '2022-08-31 18:00',
            'subject' => 'HP制作費用',
            'remarks' => '手数料はお支払いください。',
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
