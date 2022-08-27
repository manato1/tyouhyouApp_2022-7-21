<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Quotation::factory(5)->create([
            'remarks' => null
        ]);

        \App\Models\Quotation::factory(5)->create([
            'user_id' => '12',
            'subject' => null
        ]);

        \App\Models\Invoice::factory(5)->create([
            'remarks' => null
        ]);

        \App\Models\Invoice::factory(5)->create([
            'user_id' => '12',
            'subject' => null
        ]);

        \App\Models\Payee::factory(5)->create();

        \App\Models\Payee::factory(5)->create([
            'user_id' => '12',
        ]);

        for($i = 1; $i <= 10; $i++){
            
            \App\Models\Quotation_item::factory(5)->create([
                'quotation_id' => $i
            ]);

            \App\Models\Invoice_item::factory(5)->create([
                'invoice_id' => $i,
                'rate' => '8'
            ]);

        }

    }
}
