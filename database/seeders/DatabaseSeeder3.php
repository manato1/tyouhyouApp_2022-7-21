<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder3 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 6; $i <= 10; $i++){
            
            \App\Models\Quotation_item::factory(5)->create([
                'quotation_id' => $i,
                'rate' => '8'
            ]);

            \App\Models\Invoice_item::factory(5)->create([
                'invoice_id' => $i,
            ]);

        }

    }
}
